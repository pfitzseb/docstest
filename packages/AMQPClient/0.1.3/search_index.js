var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AMQPClient-1",
    "page": "Readme",
    "title": "AMQPClient",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)A Julia AMQP (Advanced Message Queuing Protocol) Client.Supports protocol version 0.9.1 and RabbitMQ extensions.This library has been tested with RabbitMQ, though it should also work with other AMQP 0.9.1 compliant systems."
},

{
    "location": "#Using-AMQPClient:-1",
    "page": "Readme",
    "title": "Using AMQPClient:",
    "category": "section",
    "text": "Connections and Channels\nExchanges and Queues\nSending and Receiving MessagesNote: These documents may not mention all implemented APIs yet. Please look at the protocol references or exported methods of the package to get the complete list."
},

{
    "location": "#Protocol-reference:-1",
    "page": "Readme",
    "title": "Protocol reference:",
    "category": "section",
    "text": "AMQP v0.9.1\nRabbitMQ Extensions"
},

{
    "location": "autodocs/#AMQPClient.basic_cancel",
    "page": "Docstrings",
    "title": "AMQPClient.basic_cancel",
    "category": "function",
    "text": "Cancels a consumer.\n\nThis does not affect already delivered messages, but it does mean the server will not send any more messages for that consumer. The client may receive an arbitrary number of  messages in between sending the cancel method and receiving the cancel­ok reply. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#AMQPClient.basic_consume",
    "page": "Docstrings",
    "title": "AMQPClient.basic_consume",
    "category": "function",
    "text": "Start a queue consumer.\n\nqueue: queue name consumertag: id of the consumer, server generates a unique tag if this is empty nolocal: do not deliver own messages no_ack: no acknowledgment needed, server automatically and silently acknowledges delivery (speed at the cost of reliability) exclusive: request exclusive access (only this consumer can access the queue) nowait: do not send a reply method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AMQPClient.basic_publish",
    "page": "Docstrings",
    "title": "AMQPClient.basic_publish",
    "category": "function",
    "text": "Publish a message\n\nThis method publishes a message to a specific exchange. The message will be routed to queues as defined by the exchange configuration and distributed to any active consumers when the transaction, if any, is committed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AMQPClient.is_method",
    "page": "Docstrings",
    "title": "AMQPClient.is_method",
    "category": "function",
    "text": "Validate if the method frame is for the given class and method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AMQPClient.queue_declare",
    "page": "Docstrings",
    "title": "AMQPClient.queue_declare",
    "category": "function",
    "text": "Declare a queue (or query an existing queue). Returns a tuple: (boolean success/failure, queue name, message count, consumer count)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AMQPClient.queue_delete",
    "page": "Docstrings",
    "title": "AMQPClient.queue_delete",
    "category": "function",
    "text": "Delete a queue. Returns a tuple: (boolean success/failure, message count)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AMQPClient.queue_purge",
    "page": "Docstrings",
    "title": "AMQPClient.queue_purge",
    "category": "function",
    "text": "Purge messages from a queue. Returns a tuple: (boolean success/failure, message count)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.read",
    "page": "Docstrings",
    "title": "Base.read",
    "category": "function",
    "text": "Read a generic frame. All frames have the following wire format:\n\n0      1         3      7                  size+7     size+8 +–––+––––-+––––-+ +––––––-+ +–––––-+ | type | channel | size    | |    payload  | | frame-end | +–––+––––-+––––-+ +––––––-+ +–––––-+ octet    short     long       \'size\' octets      octet\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AMQPClient.@debugAMQPClient.AMQPClientAMQPClient.AMQPClientExceptionAMQPClient.AMQPProtocolExceptionAMQPClient.AMQP_DEFAULT_PORTAMQPClient.AMQP_VERSIONAMQPClient.AUTH_PROVIDERSAMQPClient.AbstractChannelAMQPClient.CLASSMETHODNAME_MAPAMQPClient.CLASSNAME_MAPAMQPClient.CLASS_MAPAMQPClient.CLIENT_IDENTIFICATIONAMQPClient.CONN_MAX_QUEUEDAMQPClient.CONN_STATE_CLOSEDAMQPClient.CONN_STATE_CLOSINGAMQPClient.CONN_STATE_OPENAMQPClient.CONN_STATE_OPENINGAMQPClient.ClassSpecAMQPClient.CloseReasonAMQPClient.ConnectionAMQPClient.ContentWeightAMQPClient.DEBUGAMQPClient.DEFAULT_AUTH_PARAMSAMQPClient.DEFAULT_CHANNELAMQPClient.DEFAULT_CHANNELMAXAMQPClient.DEFAULT_CONNECT_TIMEOUTAMQPClient.DEFAULT_TIMEOUTAMQPClient.EXCHANGE_TYPE_DIRECTAMQPClient.EXCHANGE_TYPE_FANOUTAMQPClient.EXCHANGE_TYPE_HEADERSAMQPClient.EXCHANGE_TYPE_TOPICAMQPClient.FieldIndicatorMapAMQPClient.FieldValueIndicatorMapAMQPClient.FrameBodyAMQPClient.FrameEndAMQPClient.FrameHeaderAMQPClient.FrameHeartbeatAMQPClient.FrameMethodAMQPClient.FrameMinSizeAMQPClient.GET_EMPTY_RESPAMQPClient.HardErrorChannelErrorAMQPClient.HardErrorCommandInvalidAMQPClient.HardErrorConnectionForcedAMQPClient.HardErrorFrameErrorAMQPClient.HardErrorInternalErrorAMQPClient.HardErrorInvalidPathAMQPClient.HardErrorNotAllowedAMQPClient.HardErrorNotImplementedAMQPClient.HardErrorResourceErrorAMQPClient.HardErrorSyntaxErrorAMQPClient.HardErrorUnexpectedFrameAMQPClient.HeartBeatAMQPClient.LiteralAMQPAMQPClient.MessageAMQPClient.MessageChannelAMQPClient.MessageConsumerAMQPClient.MethodSpecAMQPClient.NON_PERSISTENTAMQPClient.PERSISTENTAMQPClient.PROPERTIESAMQPClient.PropertySpecAMQPClient.ProtocolHeaderAMQPClient.ProtocolIdAMQPClient.ProtocolVersionAMQPClient.ReplySuccessAMQPClient.SORTED_PROPERTIESAMQPClient.SORTED_PROPERTY_NAMESAMQPClient.SoftErrorAccessRefusedAMQPClient.SoftErrorContentTooLargeAMQPClient.SoftErrorNoConsumersAMQPClient.SoftErrorNotFoundAMQPClient.SoftErrorPreconditionFailedAMQPClient.SoftErrorResourceLockedAMQPClient.TAMQPBitAMQPClient.TAMQPBodyPayloadAMQPClient.TAMQPBoolAMQPClient.TAMQPByteArrayAMQPClient.TAMQPChannelAMQPClient.TAMQPClassIdAMQPClient.TAMQPConsumerTagAMQPClient.TAMQPContentAMQPClient.TAMQPContentBodyFrameAMQPClient.TAMQPContentBodySizeAMQPClient.TAMQPContentClassAMQPClient.TAMQPContentHeaderFrameAMQPClient.TAMQPDecimalValueAMQPClient.TAMQPDeliveryTagAMQPClient.TAMQPDoubleAMQPClient.TAMQPExchangeNameAMQPClient.TAMQPFVAMQPClient.TAMQPFieldAMQPClient.TAMQPFieldArrayAMQPClient.TAMQPFieldNameAMQPClient.TAMQPFieldTableAMQPClient.TAMQPFieldValueAMQPClient.TAMQPFieldValuePairAMQPClient.TAMQPFloatAMQPClient.TAMQPFramePropertiesAMQPClient.TAMQPGenericFrameAMQPClient.TAMQPHeaderPayloadAMQPClient.TAMQPHeartBeatFrameAMQPClient.TAMQPLengthPrefixedAMQPClient.TAMQPLongIntAMQPClient.TAMQPLongLongIntAMQPClient.TAMQPLongLongUIntAMQPClient.TAMQPLongStrAMQPClient.TAMQPLongUIntAMQPClient.TAMQPMessageCountAMQPClient.TAMQPMethodAMQPClient.TAMQPMethodFrameAMQPClient.TAMQPMethodIdAMQPClient.TAMQPMethodPayloadAMQPClient.TAMQPNoAckAMQPClient.TAMQPNoLocalAMQPClient.TAMQPNoWaitAMQPClient.TAMQPOctetAMQPClient.TAMQPPathAMQPClient.TAMQPPayloadSizeAMQPClient.TAMQPPeerPropertiesAMQPClient.TAMQPPropertyFlagsAMQPClient.TAMQPQueueNameAMQPClient.TAMQPRedeliveredAMQPClient.TAMQPReplyCodeAMQPClient.TAMQPReplyTextAMQPClient.TAMQPScaleAMQPClient.TAMQPShortIntAMQPClient.TAMQPShortShortIntAMQPClient.TAMQPShortShortUIntAMQPClient.TAMQPShortStrAMQPClient.TAMQPShortUIntAMQPClient.TAMQPTimeStampAMQPClient.UNUSED_CHANNELAMQPClient._on_ackAMQPClient._on_basic_consume_cancel_okAMQPClient._on_close_okAMQPClient._on_queue_purge_delete_okAMQPClient._send_closeAMQPClient._send_close_okAMQPClient._send_exchange_bind_unbindAMQPClient._send_txAMQPClient._txAMQPClient._wait_respAMQPClient.as_fvalAMQPClient.auth_resp_amqplainAMQPClient.basic_ackAMQPClient.basic_cancelAMQPClient.basic_consumeAMQPClient.basic_getAMQPClient.basic_publishAMQPClient.basic_qosAMQPClient.basic_recoverAMQPClient.basic_rejectAMQPClient.channelAMQPClient.channel_message_consumerAMQPClient.channel_receiverAMQPClient.clear_handlersAMQPClient.closeAMQPClient.confirm_selectAMQPClient.connectionAMQPClient.connection_heartbeaterAMQPClient.connection_processorAMQPClient.connection_receiverAMQPClient.connection_senderAMQPClient.convertAMQPClient.default_exchange_nameAMQPClient.displaynameAMQPClient.evalAMQPClient.exchange_bindAMQPClient.exchange_declareAMQPClient.exchange_deleteAMQPClient.exchange_unbindAMQPClient.find_unused_channelAMQPClient.frame_keyAMQPClient.get_propertyAMQPClient.handleAMQPClient.includeAMQPClient.is_methodAMQPClient.make_classmethod_mapAMQPClient.methodAMQPClient.method_keyAMQPClient.method_nameAMQPClient.methodargsAMQPClient.on_basic_cancel_okAMQPClient.on_basic_consume_okAMQPClient.on_basic_get_empty_or_okAMQPClient.on_basic_qos_okAMQPClient.on_basic_recover_okAMQPClient.on_channel_closeAMQPClient.on_channel_close_okAMQPClient.on_channel_flowAMQPClient.on_channel_message_inAMQPClient.on_channel_open_okAMQPClient.on_confirm_select_okAMQPClient.on_connection_closeAMQPClient.on_connection_close_okAMQPClient.on_connection_heartbeatAMQPClient.on_connection_open_okAMQPClient.on_connection_startAMQPClient.on_connection_tuneAMQPClient.on_exchange_bind_okAMQPClient.on_exchange_declare_okAMQPClient.on_exchange_delete_okAMQPClient.on_exchange_unbind_okAMQPClient.on_queue_bind_okAMQPClient.on_queue_declare_okAMQPClient.on_queue_delete_okAMQPClient.on_queue_purge_okAMQPClient.on_queue_unbind_okAMQPClient.on_tx_commit_okAMQPClient.on_tx_rollback_okAMQPClient.on_tx_select_okAMQPClient.on_unexpected_messageAMQPClient.queue_bindAMQPClient.queue_declareAMQPClient.queue_deleteAMQPClient.queue_purgeAMQPClient.queue_unbindAMQPClient.readAMQPClient.read!AMQPClient.sendAMQPClient.send_basic_ackAMQPClient.send_basic_cancelAMQPClient.send_basic_consumeAMQPClient.send_basic_getAMQPClient.send_basic_publishAMQPClient.send_basic_qosAMQPClient.send_basic_recoverAMQPClient.send_basic_rejectAMQPClient.send_channel_closeAMQPClient.send_channel_close_okAMQPClient.send_channel_flowAMQPClient.send_channel_openAMQPClient.send_connection_closeAMQPClient.send_connection_close_okAMQPClient.send_connection_heartbeatAMQPClient.send_connection_openAMQPClient.send_connection_start_okAMQPClient.send_connection_tune_okAMQPClient.send_exchange_bindAMQPClient.send_exchange_declareAMQPClient.send_exchange_deleteAMQPClient.send_exchange_unbindAMQPClient.send_queue_bindAMQPClient.send_queue_declareAMQPClient.send_queue_deleteAMQPClient.send_queue_purgeAMQPClient.send_queue_unbindAMQPClient.send_tx_commitAMQPClient.send_tx_rollbackAMQPClient.send_tx_selectAMQPClient.set_propertiesAMQPClient.showAMQPClient.sockAMQPClient.tx_commitAMQPClient.tx_rollbackAMQPClient.tx_selectAMQPClient.wait_for_state"
},

]}
