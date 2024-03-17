/* eslint-disable react/prop-types */

export function JournalItem(props) {

    const {
        title, 
        date, 
        post,
        tag,
    } = props.items;


    return  <>

<div className="ournalItem">
        <h3 className="ournalItem__header white">{title}</h3>
        <p className="ournalItem__date orange bold">{tag}</p>
        <div className="ournalItem__body">
               <p className="ournalItem__date white light">{date?.split('-')?.reverse()?.join('/')}</p>
               <p className="ournalItem__text white light">{post}</p>
        </div>
</div>

      </>;
    
  }
  