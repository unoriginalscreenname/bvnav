RRreports = class RRreports extends React.Component {
  render() {
    return (
      <div id="portal_container">

        <GlobalNav />

        <div id="application_container">

          <ApplicationHeader title="Ratings & Reviews: Reporting" />


          <div id="task_container">
            <div id="task_content">

              <div  className="p-a-1">
              <div className="report-header">
                <div className="report-details">
                </div>
                <div hidden className="report-actions">
                  <div
                    className="btn-group btn-group-sm"
                    role="group"
                    aria-label="Basic example">

                    <button
                      type="button"
                      className="btn btn-info">Preview Site</button>

                  </div>

                </div>
              </div>
              </div>

              <TabbedNav>
                <TabNav {...nav} />
                <TabContent {...nav} />
              </TabbedNav>



            </div>
          </div>
        </div>

      </div>
    )
  }
}


let nav = {
  primary:[
    {name:"Content Report"},
    {name:"Trends Report"},
    {name:"Analyst Reports"},
  ],
  secondary:[],
  content:[
    <div />,
    <div />
  ]
}
