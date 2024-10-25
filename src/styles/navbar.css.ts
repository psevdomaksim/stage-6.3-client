import { style } from '@vanilla-extract/css';

export const navbar = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#026aa7', 
  color: '#fff',
});

export const navLeft = style({
  display: 'flex',
  alignItems: 'center',
});

export const navRight = style({
  display: 'flex',
  alignItems: 'center',
});

export const navButton = style({
  background: 'none',
  border: 'none',
  color: '#fff',
  fontSize: '16px',
  padding: '10px 15px',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'background 0.3s ease',

  ':hover': {
    backgroundColor: '#005a8f',
  },
});
