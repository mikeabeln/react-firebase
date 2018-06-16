import React from 'react'
/*
   toKeyedList - produces keyed li elements. React wants to be able to have a
   list of elements that have a unique key attribute.
   @param TagName {string} - the tag name to use for the repeating element.
   @param classList {string} - list of space separated CSS classes to use on the
   list element.
   @param getKey {function} - takes an object and returns a unique key.
   @param render {function} - takes an object and returns a React element
   @param objs {Array<object>} - list of objects to convert to React elements
 */
export function toKeyedList(TagName, classList, getKey, render, objs) {
    return objs.map((o) => {
        return (
            <TagName className={classList} key={getKey(o)}>
                {render(o)}
            </TagName>
        )
    })
}
