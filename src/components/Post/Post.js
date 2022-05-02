import '../../App.css'

export const Post = ({post}) => {
    return (
        <div>
            <div className={'post'}>
                <span>{post.title}</span>
            </div>

        </div>
    );
};

