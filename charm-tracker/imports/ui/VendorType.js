import React from "react"
import { vendorCollection } from "../api/vendors";


// let postID = this.props.post._id;
// let repliesForPostFromDB = Reply_Collection_Access.find({ post: postID }, { sort: { votes: -1 } }).fetch();
// return (
//     <>
//         <div key={this.props.post._id} className='singleItemStyle'>
//             {this.props.post.topic}
//             <div className="votesSystem">
//                 {this.props.post.votes} vote[s] {' '}
//                 <button className="button button--round" onClick={() => {
//                     UP_Collection_Access.update({ _id: this.props.post._id }, { $inc: { votes: 1 } });
//                 }}>+1</button>
//                 <button className="button button--round" onClick={() => {
//                     UP_Collection_Access.update({ _id: this.props.post._id }, { $inc: { votes: -1 } });
//                 }}>-1</button>
//                 <button className="button button--round" onClick={() => {
//                     UP_Collection_Access.remove({ _id: this.props.post._id });
//                     repliesForPostFromDB.map((reply) => {
//                         Reply_Collection_Access.remove({ _id: reply._id });
//                     });
//                 }}>X</button>
//             </div>
//             <div className="singleItemStyle--replyList">
//                 <ReplyList passed_replies={repliesForPostFromDB} />
//                 <AddReplies postID={this.props.post._id} />
//             </div>
//         </div>

//     </>

const VendorType = (props) => {
    const { vendorType, vendorNames } = props;
    return (
        <div>
            <form>
                <fieldset className="vendor">
                    <legend>{vendorType}</legend>
                </fieldset>
            </form>
        </div>
    )
}

export default VendorType