export function PageHeading (title, parent = undefined) {
  
  return (
<div className="">
  {!!parent &&
<div className="subheading text-dark-100">
            {parent}
          </div>}
  <div className="page-title">
  {title}
    </div>
    </div>
  )
}

export function CollectionsHeading (title, parent = undefined) {
  
  return (
<div className="space-y-[0.5rem]">
                <div className="subheading text-dark-100">
                  {parent}
                </div>
                <div className="collection-title text-black-100">
                  {title}
                </div>
              </div>
  )
}