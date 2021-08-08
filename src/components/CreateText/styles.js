import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
        },
        height: '100%',
        paddingTop: pxToRem(120)
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textField: {
        marginBottom: theme.spacing(3),
        color: 'initial'
    },
    submit: {
        cursor: 'pointer'
    },
    alertInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperButton: {
        position: 'relative',
        paddingTop: pxToRem(17),
    },
    preloader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: pxToRem(-10),
        marginLeft: pxToRem(-18),
    },
}));

export default useStyles;
