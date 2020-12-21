import React from 'react'


let contentLink=[];
let title="";
const PagesLink = (props) => {
    props.content.map((key,index)=>{
        return contentLink[index]= <li><a href={"/"+props.content[index]} class="">{props.content[index]}</a></li>
    })

    return (
        <>
            <div class="col-sm-6 col-lg-2 py-3">
        <ul class="menu-link">
            {contentLink}
        </ul>
      </div>
        </>
    )
}

export default PagesLink
