/**
 * Convert doc file format object to markdown format
 */

exports = module.exports = {};

// Pre-define rules
const mTitle = function(title) { return `${title}`; };
const mDivider = function(length) { return Array(length + 1).join('-'); };
const mHeader = function() {
  const header = 'Prop | Type | Description | Default | Required\n--- | --- | --- | --- | ---';

  return header;
};

const mPropTypes = function(type) {
  let values;

  if (Array.isArray(type.value)) {
    values = '(' +
      type.value.map(function(typeValue) {
        return typeValue.name || typeValue.value;
      }).join('|') +
      ')';
  } else {
    values = type.value;
  }

  return `${type.name}(${values ? values.name : ''})`;
};

const mBody = function(props) {
  let body = '';

  for (let key in props) {
    if(props.hasOwnProperty(key)) {
      const prop = props[key];
      body += `${key} | ${mPropTypes(prop.type)} | ${prop.description} | ${prop.defaultValue || ''} | ${prop.required}\n`;
    }
  }

  return body;
}

exports.react = function(name, doc) {
  const generateTitle = function(name) {
    const title = `${mTitle(name)}\n${mDivider(name.length)}`;
    return title;
  };

  const generateProps = function(props) {
    if (!props) return '\n';

    return `${mHeader()}\n${mBody(props)}`;
  };

  const markdown = `${generateTitle(name)}\n${generateProps(doc.props)}`;
  return markdown;
};
