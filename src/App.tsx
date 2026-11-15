import React from 'react';
import Button from './components/Button';
import Label from './components/Label';
import Text from './components/Text';
import Dropdown from './components/Dropdown';
import RadioButton from './components/RadioButton';
import Img from './components/Img';
import HeroImage from './components/HeroImage';
import Card from './components/Card';
import Table from './components/Table';
import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import TableFooter from './components/TableFooter';

// Choices for the demo dropdown
const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
];

// Demo page that shows every component, including disabled versions
function App() {
  return (
    <div style={{ padding: '1rem', maxWidth: 900, margin: '0 auto' }}>
      <HeroImage imageUrl="/garden.jpg" title="UI Garden" />

      <h2>Button</h2>
      <Button label="Default" />
      <Button label="Disabled" disabled />

      <h2>Label and Text</h2>
      <Label text="A label" />
      <Text text="Some paragraph text." />
      <Text text="Disabled paragraph text." disabled />

      <h2>Dropdown and Radio buttons</h2>
      <Dropdown options={options} />
      <Dropdown options={options} disabled />
      <RadioButton label="Choice 1" name="demo" />
      <RadioButton label="Disabled choice" name="demo" disabled />

      <h2>Img and Card</h2>
      <Img src="/garden.jpg" alt="Sample" />
      <Card title="Card title" content="Card content." imageUrl="/garden.jpg" />

      <Card title="Disabled card" content="Greyed out." disabled />

      <h2>Table</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell header>Name</TableCell>
            <TableCell header>Role</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Ana</TableCell>
            <TableCell>Developer</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>1 person</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default App;
