import './App.css';
import SideBarComponent from './Components/SideBar.Component';
import NavBar from './Components/NavBar';
import Dashboard from './Components/Dashboard.Component';
import Profile from './Components/profile';
import { useEffect, useState } from 'react';
import { fetchData } from './Utility/Api';
import DiagnosticList from './Components/DignosticList.Component';
import LabResults from './Components/LabResults.Components';

function App() {
  const [patients, setPatients] = useState([]);
  const [Person, setPerson] = useState(null);
  const [diagnosticList, setDiagnosticList] = useState([]);
  const [labResults, setLabResults] = useState([]);
    useEffect(() => {
        const fetchDataAsync = async () => {
            const response = await fetchData('https://fedskillstest.coalitiontechnologies.workers.dev');
            console.log(response.data);
            setPatients(response.data);
        };
        fetchDataAsync();
        if(Person){
          setDiagnosticList(Person.diagnostic_list)
        }
        if(Person){
          setLabResults(Person.lab_results)
        }
    }, [setPatients, Person]);
    const handlePerson = (person) => {
      setPerson(person);
    }
    
    return (
      <div className="App bg-primary opacity-1 w-screen grid grid-cols-[auto_1fr]">
        
        <div className="p-[18px]">
          <NavBar />
        </div>
    
        
        <div className="flex h-vh w-full justify-between gap-[32px]">
          
          <div className="h-full w-[367px] p-[18px] flex-none flex-col h-vdh basis-1/3 ">
            <SideBarComponent patients={patients} setPerson={handlePerson} />
          </div>
    
          <div className="flex flex-col overflow-y-auto justify-between w-fit pt-[18px] max-w-[840px] h-full gap-8" id='main_container'>
            <div className="flex-1 flex flex-col bg-white px-[36px] py-[18px] rounded-[16px] w-auto h-fit max-h-fit">
              <Dashboard patient={Person} />
            </div>
            <div className="flex-1 flex flex-col bg-white px-[36px] space-y-8 py-[32px] rounded-[16px] w-full max-h-[349px] overflow-hidden">
              <DiagnosticList diagnosis={diagnosticList} />
            </div>
          </div>
    
          <div className="flex h-full w-[367px] ">
            <div className="flex flex-col h-full w-[367px]" id='right_panel'>
              <Profile patient={Person} />
              <LabResults results={labResults} />
            </div>
          </div>

        </div>
      </div>
    );
    
}

export default App;
