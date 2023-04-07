export const UserList = (props) => {
  const { users } = props;

  if (users.length === 0) return null;

  const mappedUsers = users.map((data, index) => {
    return <li key={index}>{data.name}</li>;
  });

  return (
    <div style={{ background: "yellow", marginTop: 5 }}>
      <h4 style={{ margin: 0, marginBottom: 20, textDecoration: "underline" }}>
        List of users
      </h4>
      <div>{mappedUsers}</div>
    </div>
  );
};
