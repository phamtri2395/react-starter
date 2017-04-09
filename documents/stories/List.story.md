List example:

```
const userInfoItem = ({ id, first_name, last_name, avatar }) => (
  <div>
    <h4>ID: {id}</h4>
    <img style={{ display: 'inline-block' }} src={avatar} alt={id} />
    <h5>Name: {first_name} {last_name}</h5>
  </div>
);

userInfoItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string.isRequired,
  avatar: React.PropTypes.string.isRequired
};

const testCollection = [{
    "id": 4,
    "first_name": "eve",
    "last_name": "holt",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
},
{
    "id": 5,
    "first_name": "gob",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
},
{
    "id": 6,
    "first_name": "tracey",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
}];

<List collection={testCollection} Item={userInfoItem} />
```
