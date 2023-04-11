const User = ({item}) => {
    return (
        <div>

            <h3>Id: {item.id}</h3>
            <p><h3>{item.name}</h3></p>
            <p>Status: {item.status}</p>
            <p>Species: {item.species}</p>
            <p>Gender: {item.gender}</p>
            <p><b>Origin:</b> Name: {item.origin.name} Url: {item.origin.url}</p>
            <p><b>location:</b> Name: {item.location.name} Url: {item.location.url}</p>
            <img src={item.image}/>
            <p>Episode:{item.episode}</p>

        </div>
    );
};

export default User;