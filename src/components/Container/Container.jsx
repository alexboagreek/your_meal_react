import styles from './Container.module.css';
import classNames from 'classnames';

export const Container = ({ children, className }) => (
    <div className={classNames(styles.container, className)}>
      { children }
    </div>
);


