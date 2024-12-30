import React, { useState } from 'react';
    import { Button, TextField, Grid, Paper } from '@mui/material';

    const App = () => {
      const [input, setInput] = useState('');
      const [result, setResult] = useState('');

      const handleInput = (value) => {
        setInput(input + value);
      };

      const calculate = () => {
        try {
          setResult(eval(input));
        } catch (error) {
          setResult('Error');
        }
      };

      const clear = () => {
        setInput('');
        setResult('');
      };

      return (
        <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField value={input} readOnly fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField value={result} readOnly fullWidth />
            </Grid>
            <Grid item xs={3}>
              <Button onClick={() => handleInput('1')}>1</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={() => handleInput('2')}>2</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={() => handleInput('3')}>3</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={() => handleInput('4')}>4</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={() => handleInput('5')}>5</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={() => handleInput('6')}>6</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={() => handleInput('7')}>7</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={() => handleInput('8')}>8</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={() => handleInput('9')}>9</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={() => handleInput('0')}>0</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={() => handleInput('+')}>+</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={() => handleInput('-')}>-</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={() => handleInput('*')}>*</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={() => handleInput('/')}>/</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={calculate}>=</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={clear}>Clear</Button>
            </Grid>
          </Grid>
        </Paper>
      );
    };

    export default App;
