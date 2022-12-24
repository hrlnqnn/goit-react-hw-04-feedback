import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={css.optionsWrapper}>
        {options.map(option => (
            <button
                className={css.optionBtn}
                key={option}
                onClick={onLeaveFeedback}
                type="button"
                data-feedback={option}
            >
                {option}
            </button>
        ))}
    </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};