import { Box, createStyles, makeStyles, Modal, Paper, Theme } from '@material-ui/core';
import React, { FC, useState } from 'react';
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
		<Modal
			open={isOpen}
			onClose={handleClose}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
		>
			<Box className={classes.root}>{isOpen ? children : null}</Box>
		</Modal>
	);
};

export default RouterModal;
