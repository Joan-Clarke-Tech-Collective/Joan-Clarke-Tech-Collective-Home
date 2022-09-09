import * as React from "react"
import Template from "./template"

import Intro from "./intro";
import Projects from "./projects";
import Members from "./members";
import Mission from "./mission";

const IndexPage = () => {
  return (
<>
<Template />
<Intro/>
<Projects id='projects'/>
<Members/>
<Mission/>
</>
  )
}

export default IndexPage

export const Head = () => <title>Joan Clarke Tech Collective</title>