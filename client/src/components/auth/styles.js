import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			backgroundColor: '#665a5a',
		},
		'& .MuiContainer-root': {},
	},
	container: {
		backgroundColor: '#665a5a',
		width: '40%',
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing(2),
		backgroundColor: '#665a5a',
		alignItems: 'center',
		alignContent: 'stretch',
		justifyContent: 'space-evenly',
	},
	form: {
		padding: theme.spacing(3),
		width: '100%',
		backgroundColor: '#665a5a',
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	heading: {
		color: 'white',
	},
	input: {
		backgroundColor: '#665a5a',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'stretch',
		color: 'white',
		fontSize: '25px',
		padding: '3px',
		margin: '6px',
	},
	btnSwitch: {
		color: 'white',
	},
	footer1: {
		display: 'flex',
		flexDirection: 'column',
		width: '70%',
	},
	footer: {
		marginTop: '30px',
	},
	btnSubmit: {
		marginTop: '30px',
		backgroundColor: '#336e45',
		color: 'white',
		'&:hover': {
			backgroundColor: '#00b51f',
		},
	},
	gender: {
		color: 'white',
		display: 'flex',
	},
}));
