const path = require('path');
const fs = require('fs');

const includeRegex = /({% include '([\d.\/\-\w@_]*)'.*%})/im;

module.exports = function loader(source) {
  let output = `${source}`;
  let match = output.match(includeRegex);

  while ((match = output.match(includeRegex))) {
    const includeString = match[1];
    const templatePath = match[2];
    const resolvedTemplatePath = path.join(this.context, templatePath);
    this.addDependency(resolvedTemplatePath);
    const template = fs.readFileSync(resolvedTemplatePath, 'utf8');
    output = output.replace(includeString, template);
  }

  return output;
};
