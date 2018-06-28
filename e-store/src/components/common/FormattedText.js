import React, { Component } from "react";

export const UnorderedList = (props) => 
    <ul key={props.key}>
        {props.items.map((item, idx) =>
            <li key={idx}>{item}</li>
        )}
    </ul>

export const ParagraphList = (props) => 
    props.items.map((item, idx) => 
        Array.isArray(item) ?
            (<UnorderedList key={idx} items={item} />) :
            (<p key={idx}>{item}</p>));

export default (props) =>
    <div name="formattedText">
        {Array.isArray(props.content) ?
            (<ParagraphList items={props.content} />) :
            (<p key="0">{ props.content } </p>)
        }
    </div>;
