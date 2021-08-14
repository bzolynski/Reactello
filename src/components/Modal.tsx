import * as Mui from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../store/reducers/reducers';
import { closeModal } from '../store/actions/modalActions';
import { ModalState } from '../store/reducers/modalReducer';
type CloseModal = ReturnType<typeof closeModal>;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)'
		}
	})
);

type Props = {};
const RouterModal: FC<Props> = ({ children }) => {
	const dispatch = useDispatch();
	const { isOpen } = useSelector<Store, ModalState>((state) => ({ ...state.modalReducer }));

	const classes = useStyles();
	const handleClose = () => {
		dispatch<CloseModal>(closeModal());
	};

	return (
		<Mui.Modal
			open={isOpen}
			onClose={handleClose}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
		>
			<Mui.Box className={classes.root}>{isOpen ? children : null}</Mui.Box>
		</Mui.Modal>
	);
};

export default RouterModal;
