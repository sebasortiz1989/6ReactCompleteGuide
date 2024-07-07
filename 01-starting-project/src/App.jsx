import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from "react";

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please Select a topic</p>;
    if (selectedTopic)
        tabContent =
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                      {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
            </div>;

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]}/>
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept
                            title={CORE_CONCEPTS[3].title}
                            description={CORE_CONCEPTS[3].description}
                            image={CORE_CONCEPTS[3].image}/>
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    {/*{!selectedTopic ?*/}
                    {/*    <p>Please Select a topic</p> :*/}
                    {/*    <div id="tab-content">*/}
                    {/*        <h3>{EXAMPLES[selectedTopic].title}</h3>*/}
                    {/*        <p>{EXAMPLES[selectedTopic].description}</p>*/}
                    {/*        <pre>*/}
                    {/*              <code>*/}
                    {/*                  {EXAMPLES[selectedTopic].code}*/}
                    {/*              </code>*/}
                    {/*          </pre>*/}
                    {/*    </div>}*/}

                    {/*{!selectedTopic && <p>Please Select a topic</p>}*/}
                    {/*{selectedTopic &&*/}
                    {/*    <div id="tab-content">*/}
                    {/*        <h3>{EXAMPLES[selectedTopic].title}</h3>*/}
                    {/*        <p>{EXAMPLES[selectedTopic].description}</p>*/}
                    {/*        <pre>*/}
                    {/*              <code>*/}
                    {/*                  {EXAMPLES[selectedTopic].code}*/}
                    {/*              </code>*/}
                    {/*        </pre>*/}
                    {/*    </div>}*/}

                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
