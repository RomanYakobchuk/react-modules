import '../../App.css'

export const Comment = ({comment}) => {
    return (
        <div  className={'comment'}>

            <span>{comment.body}</span>
            <hr/>

        </div>
    );
};

