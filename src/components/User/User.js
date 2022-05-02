import '../../App.css'
export const User = ({user}) => {
    return (
        <div className={'user'}>
            <span>{user.name}</span>
            <span>{user.username}</span>
            <span>{user.email}</span>
        </div>
    );
};

