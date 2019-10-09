import React, { /* useState, */ Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect/* , useSelector, useDispatch */ } from 'react-redux'


import ContentHeader from '../templates/contentHeader'
import Content from '../templates/content'
import Tabs from '../tab/tabs'
import TabsHeader from '../tab/tabsHeader'
import TabsContent from '../tab/tabsContent'
import TabHeader from '../tab/tabHeader'
import TabContent from '../tab/tabContent'
import {selectTab, showTabs} from '../actions/tabActions'
import FormList from '../form/FormList'
import Form from '../form/Form'
import { create/* , getReports, showUpdate */} from '../actions/reportActions'

// export default props => { 
//     const dispatch = useDispatch() 

//     useState(() => {
//         dispatch(
//             selectTab('tabList'),
//             showTabs('tabList', 'tabCreate'),
//             getReports(),
//             showUpdate()
//         )
//     }, [])
class FormReport extends Component {
    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render(){
        return (
            <div className="box box-success">
                <ContentHeader title='Verificar denúncias'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label=' Listar' icon='bars' target='tabList'/>
                            <TabHeader label=' Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label=' Andamento' icon='hourglass' target='tabUpdate'/>
                            <TabHeader label=' Concluído' icon='check' target='tabComplete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <FormList/>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={ create }/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form />
                            </TabContent>
                            <TabContent id='tabComplete'><h1>Concluído</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )    
    }
}
const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({ create, selectTab, showTabs }, dispatch)
/* FormReport =  */
export default connect(state => mapStateToProps, mapDispatchToProps)(FormReport)

/* export default FormReport */