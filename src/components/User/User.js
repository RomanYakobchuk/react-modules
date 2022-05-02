import '../../App.css'
export const User = ({user}) => {
    return (
        <div className={user.id % 2 ? 'yellow' : 'blue'}>
            <span>{user.name}</span>
            <span>{user.username}</span>
            <span>{user.email}</span>
        </div>
    );
};

