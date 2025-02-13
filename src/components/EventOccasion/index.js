import React from 'react'
import PropTypes from 'prop-types'

import {FormattedMessage, injectIntl} from 'react-intl'

import {connect} from 'react-redux'
import {setData} from '../../actions/editor'

import {mapKeywordSetToForm, mapLanguagesSetToForm} from 'src/utils/apiDataMapping.js'

import {
    HelDateTimeField,
    HelDatePicker,
} from 'src/components/HelFormFields'

class EventOccasion extends React.Component {

    render() {
        const {values, validationErrors, contentLanguages} = this.props.editor
        return (
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <HelDateTimeField validationErrors={validationErrors['start_time']} defaultValue={values['start_time']} ref="start_time" name="start_time" label="event-starting-datetime" />
                </div>
                <div className="col-xs-12 col-md-6">
                    <HelDateTimeField validationErrors={validationErrors['end_time']} defaultValue={values['end_time']} ref="end_time" name="end_time" label="event-ending-datetime" />
                </div>
            </div>
        )
    }
}

EventOccasion.propTypes = {
    editor: PropTypes.shape({
        contentLanguages: PropTypes.any,
        values: PropTypes.object,
        validationErrors: PropTypes.object,
    }).isRequired,
}

export default EventOccasion
