const Notes = (props) => {

    const notes = props.notes;
    const author = props.author;

    return (
        <div>
            {notes.map((note) => {
                return (
                    <div key={note.id}>{note}</div>
                )
            })}</div>
    )
}

export default Notes;