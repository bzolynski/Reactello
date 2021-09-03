import * as Mui from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../store/reducers/reducers';
import { closeModal } from '../store/actions/modalActions';
import { ModalState } from '../store/reducers/modalReducer';
import { Switch, useHistory } from 'react-router';
type CloseModal = ReturnType<typeof closeModal>;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			
		}
	})
);

type Props = {};
const ModalSwitch: FC<Props> = ({ children }) => {
	const dispatch = useDispatch();
	const { isOpen, path } = useSelector<Store, ModalState>((state) => ({ ...state.modalReducer }));
	const history = useHistory();
	useEffect(
		() => {
			if (isOpen) {
				if (history.location.pathname.search('/m/') == -1) {
					history.push(path);
				} else {
					history.replace(history.location.pathname);
				}
			}
		},
		[ path ]
	);
	const classes = useStyles();
	const handleClose = () => {
		dispatch<CloseModal>(closeModal());
		const index = history.location.pathname.indexOf('m/');
		const root = history.location.pathname.substring(0, index);
		history.replace(root);
	};

	return (
		<Switch>
			<Mui.Modal
				open={isOpen}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<Mui.Box className={classes.root}>{isOpen ? children : null}</Mui.Box>
			</Mui.Modal>
		</Switch>
	);
};

export default ModalSwitch;
