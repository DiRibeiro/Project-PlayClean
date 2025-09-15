import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Box, Button, Card, CardContent, CardHeader, Grid, MenuItem, TextField } from '@mui/material';

const bairros = ['Aguapés', 'Albatroz']; // TODO: mover para fonte única/serviço

const renderSelect = ({ input, meta, label, children }) => (
  <TextField
    select
    label={label}
    fullWidth
    {...input}
    error={meta.touched && Boolean(meta.error)}
    helperText={meta.touched && meta.error}
  >
    <MenuItem value="" disabled>Selecione</MenuItem>
    {children}
  </TextField>
);

const renderTextArea = ({ input, label, meta, placeholder }) => (
  <TextField
    label={label}
    placeholder={placeholder}
    fullWidth
    multiline
    minRows={4}
    {...input}
    error={meta.touched && Boolean(meta.error)}
    helperText={meta.touched && meta.error}
  />
);

const required = (v) => (v ? undefined : 'Obrigatório');

function ColetaForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <Card>
        <CardHeader title="Agendamento de Coletas" />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Field name="neighborhood" component={renderSelect} label="Bairro" validate={required}>
                {bairros.map((b) => <MenuItem key={b} value={b}>{b}</MenuItem>)}
              </Field>
            </Grid>
            <Grid item xs={12} md={9}>
              <Box sx={{ display: 'grid', gap: 2 }}>
                <Field
                  name="organic"
                  component={renderTextArea}
                  label="Descrição Coleta Orgânica"
                  placeholder={'Segunda-feira - Manhã\nQuinta-feira - Tarde'}
                  validate={required}
                />
                <Field
                  name="selective"
                  component={renderTextArea}
                  label="Descrição Coleta Seletiva"
                  placeholder={'Terça-feira - Tarde\nQuinta-feira - Noite'}
                  validate={required}
                />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Button type="submit" variant="contained" color="success">Cadastrar</Button>
        </Box>
      </Card>
    </form>
  );
}

export default reduxForm({ form: 'newColetaForm' })(ColetaForm);
