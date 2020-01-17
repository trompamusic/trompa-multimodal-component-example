import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { MultiModalComponent } from 'trompa-multimodal-component';
import './App.css';


function App() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <h2>Search for a Node in the CE-API</h2>
        <pre className="App-nodeExample">
          {selected ? JSON.stringify(selected, null, 2) : 'Nothing selected'}
        </pre>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Search Node
        </Button>
      </header>
      <Dialog
        open={open}
        maxWidth="md"
        onClose={() => setOpen(false)}
        fullWidth
      >
        <MultiModalComponent
          onResultClick={node => {
            setSelected(node);
            setOpen(false);
          }}
        />
      </Dialog>
    </div>
  );
}

export default App;
