import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = props => {
    const statisticsOptions = Object.keys(props);

    return (
        <ul className={css.statisticsList}>
            {statisticsOptions.map(option => (
                <li key={option} className={css.statisticsItem}>
                    {option !== 'positivePercentage' ? option : 'positive feedback'}:
                    {' ' + props[option]}
                </li>
            ))}
        </ul>
    );
};

Statistics.propTypes = {
    props: PropTypes.shape({
        good: PropTypes.string.isRequired,
        neutral: PropTypes.string.isRequired,
        bad: PropTypes.string.isRequired,
        positivePercentage: PropTypes.string.isRequired,
    }),
};