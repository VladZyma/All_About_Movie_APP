import {MDBBadge} from 'mdb-react-ui-kit';



const badgeStyle = {
    width: '320px',
    position: "relative",
    left: '-20px',
}

const GenreBadge = (props) => {

    const {movie: {genre_ids}, genres} = props;
    console.log(genre_ids);
    console.log(genres);


    return (
        <>
            <MDBBadge className='mx-2 text-secondary' color='secondary' light style={badgeStyle}>
                {genre_ids && genre_ids.map(id => `${genres[id]?.name} `)}
            </MDBBadge>
        </>
    );

}

export {GenreBadge}
