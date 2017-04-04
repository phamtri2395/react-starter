/**
 * Convert doc file format object to markdown format
 */

exports = module.exports = {};

// Pre-define rules
const mTitle = function(title) { return `###${title}###`; };
const mDivider = function(length) { return Array(length + 6 + 1).join('-'); };
const mHeader = function() {
  const header = 'Prop | Type | Description | Default | Required\n--- | --- | --- | --- | ---';

  return header;
};
const mBody = function(props) {
  const body = `${props.propName} | ${props.propName.type.name} | ${props.description} | ${props.defaultValue} | ${props.required}`;
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
