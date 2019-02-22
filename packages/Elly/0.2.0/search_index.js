var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Elly-1",
    "page": "Readme",
    "title": "Elly",
    "category": "section",
    "text": "(Image: Build Status)Elly is a Hadoop HDFS and Yarn client. It provides:A familiar Julia ClusterManager interface, making it possible to use the familiar Julia parallel constructs on any Hadoop/Yarn cluster: addprocs, @parallel, spawn, pmap, etc.\nLower level APIs to write native Yarn applications.\nA familiar Julia IO API for accessing HDFS files. It is a pure Julia implementation with no dependencies on libhdfs."
},

{
    "location": "#Using-Elly-1",
    "page": "Readme",
    "title": "Using Elly",
    "category": "section",
    "text": "HDFS using Elly\nYarn Applications using Elly\nJulia Cluster Manager for Yarn"
},

{
    "location": "#Requirements-1",
    "page": "Readme",
    "title": "Requirements",
    "category": "section",
    "text": "Since Elly uses the newer Protobuf interface, it requires a Hadoop 2.2+ distribution."
},

{
    "location": "autodocs/#Elly.APPLICATION_WEB_PROXY_BASE_ENV",
    "page": "Docstrings",
    "title": "Elly.APPLICATION_WEB_PROXY_BASE_ENV",
    "category": "constant",
    "text": "The environmental variable for APPLICATIONWEBPROXY_BASE. Set in ApplicationMaster\'s environment only. This states that for all non-relative web URLs in the app masters web UI what base should they have.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.APP_STATES",
    "page": "Docstrings",
    "title": "Elly.APP_STATES",
    "category": "constant",
    "text": "APP_STATES: enum value to state map. Used for converting state for display.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.APP_SUBMIT_TIME_ENV",
    "page": "Docstrings",
    "title": "Elly.APP_SUBMIT_TIME_ENV",
    "category": "constant",
    "text": "The environment variable for APPSUBMITTIME. Set in AppMaster environment only\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.ATTEMPT_STATES",
    "page": "Docstrings",
    "title": "Elly.ATTEMPT_STATES",
    "category": "constant",
    "text": "ATTEMPT_STATES: enum value to state map. Used for converting state for display.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.CONTAINER_TOKEN_FILE_ENV_NAME",
    "page": "Docstrings",
    "title": "Elly.CONTAINER_TOKEN_FILE_ENV_NAME",
    "category": "constant",
    "text": "The cache file into which container token is written\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.FINAL_APP_STATES",
    "page": "Docstrings",
    "title": "Elly.FINAL_APP_STATES",
    "category": "constant",
    "text": "FINALAPPSTATES: enum value to state map. Used for converting state for display.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.HDFSBlockReader",
    "page": "Docstrings",
    "title": "Elly.HDFSBlockReader",
    "category": "type",
    "text": "HDFSBlockReader reads one block of data from a datanode.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.HDFSBlockWriter",
    "page": "Docstrings",
    "title": "Elly.HDFSBlockWriter",
    "category": "type",
    "text": "HDFSBlockWriter writes one block worth of data to a datanode.\n\nThe write method returns number of bytes accepted for writing into this block, which may be less than what was requested if block is full.\n\nPackets are sent and acks received as and when data being written exceed packet size limit.\n\nThe close operation flushes remaining data in the block and waits for all pending acks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.HDFSClient",
    "page": "Docstrings",
    "title": "Elly.HDFSClient",
    "category": "type",
    "text": "HDFSClient\n\nA client to the namenode in a HDFS cluster and holds a connection to it. It also stores the folder context for using relative paths in APIs that use the client.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.HDFSException",
    "page": "Docstrings",
    "title": "Elly.HDFSException",
    "category": "type",
    "text": "HDFSException\n\nThrown by HDFS APIs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.HDFSFile",
    "page": "Docstrings",
    "title": "Elly.HDFSFile",
    "category": "type",
    "text": "HDFSFile\n\nHolds a HDFSClient and path pointing to a file on HDFS\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.HDFSFileInfo",
    "page": "Docstrings",
    "title": "Elly.HDFSFileInfo",
    "category": "type",
    "text": "HDFSFileInfo\n\nStat structure for file/foledr in HDFS\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.HDFSFileReader",
    "page": "Docstrings",
    "title": "Elly.HDFSFileReader",
    "category": "type",
    "text": "HDFSFileReader\n\nProvides Julia IO APIs for reading HDFS files. Communicates with namenode for file metadata (through HDFSClient) and to datanodes for file data (through HDFSBlockReader)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.HDFSFileWriter",
    "page": "Docstrings",
    "title": "Elly.HDFSFileWriter",
    "category": "type",
    "text": "HDFSFileWriter\n\nProvides Julia IO APIs for writing HDFS files.\n\nSteps:\n\nget datanodes to write onto from namenode\nbreak bytes into packets\nwrite packets into first datanode\'s data channel (datanode will mirror packets to downstream datanodes)\nwhen complete, confirm namenode with a blockReceived\n\nOn close call NameNode.complete to:\n\nremove lease   lease is a write lock for file modification. no leases are required for reading files.   leases are managed by namenode   lease is added on file create or append   dfs client should start thread to renew leases periodically\nchange file from under construction to complete\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.HDFSProtocol",
    "page": "Docstrings",
    "title": "Elly.HDFSProtocol",
    "category": "type",
    "text": "HDFSProtocol: Hadoop RPC client for namenode protocol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.HDFS_READER_WINDOW_LENGTH",
    "page": "Docstrings",
    "title": "Elly.HDFS_READER_WINDOW_LENGTH",
    "category": "constant",
    "text": "Default length (bytes) upto which to pre-fetch block metadata. (10 blocks of default size)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.HadoopDataChannel",
    "page": "Docstrings",
    "title": "Elly.HadoopDataChannel",
    "category": "type",
    "text": "HadoopDataChannel is the connection to a datanode. Also associated with it is a buffer to help in message preparation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.HadoopDataChannelPool",
    "page": "Docstrings",
    "title": "Elly.HadoopDataChannelPool",
    "category": "type",
    "text": "HadoopDataChannelPool is a connection pool that holds connections to datanodes. Connections are deemed stale after keepalivesecs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.HadoopRpcException",
    "page": "Docstrings",
    "title": "Elly.HadoopRpcException",
    "category": "type",
    "text": "HadoopRpcException is thrown on Rpc interaction errors either with namenode or datanode. Field status contains error code (enum) if received from the connected entity or just ERROR (1) to indicate failure. Though HadoopRpcException is used while communicating with both namenodes and datanodes, SUCCESS and ERROR are coded with the same values in both cases. Other specific error codes need knowledge of the context to interpret.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.HadoopRpcProtocol",
    "page": "Docstrings",
    "title": "Elly.HadoopRpcProtocol",
    "category": "type",
    "text": "HadoopRpcProtocol binds a channel and controller with a service protocol implementation. Used by actual service implementations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.LOG_DIR_EXPANSION_VAR",
    "page": "Docstrings",
    "title": "Elly.LOG_DIR_EXPANSION_VAR",
    "category": "constant",
    "text": "The temporary environmental variable for container log directory. This should be replaced by real container log directory on container launch.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.MAX_APP_ATTEMPTS_ENV",
    "page": "Docstrings",
    "title": "Elly.MAX_APP_ATTEMPTS_ENV",
    "category": "constant",
    "text": "The environment variable for MAXAPPATTEMPTS. Set in AppMaster environment only\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.NODE_STATES",
    "page": "Docstrings",
    "title": "Elly.NODE_STATES",
    "category": "constant",
    "text": "NODE_STATES: enum value to state map. Used for converting state for display.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.PipelinedPacket",
    "page": "Docstrings",
    "title": "Elly.PipelinedPacket",
    "category": "type",
    "text": "PipelinedPacket holds a packet of data while it is sent to datanodes and acknowledged. The data bytes are reset once acks are received successfully to reduce memory usage.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.RequestPipeline",
    "page": "Docstrings",
    "title": "Elly.RequestPipeline",
    "category": "type",
    "text": "RequestPipeline holds entities while they are requested for from yarn resource manager. Application master thread extracts pending items and requests them from RM, whereupon they are moved on to the requested state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.WriterPipeline",
    "page": "Docstrings",
    "title": "Elly.WriterPipeline",
    "category": "type",
    "text": "WriterPipeline holds all packets of data for a block and provides methods to maintain their states. Pipeline failed status is set if any of the acks received is a failure. Field acked_bytes contains the count of bytes successfully sent till an error is encountered.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.YarnAMNMProtocol",
    "page": "Docstrings",
    "title": "Elly.YarnAMNMProtocol",
    "category": "type",
    "text": "YarnAMNMProtocol: Hadoop RPC client for Yarn application master to node manager protocol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.YarnAMRMProtocol",
    "page": "Docstrings",
    "title": "Elly.YarnAMRMProtocol",
    "category": "type",
    "text": "YarnAMRMProtocol: Hadoop RPC client for Yarn application master to resource manager protocol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.YarnApp",
    "page": "Docstrings",
    "title": "Elly.YarnApp",
    "category": "type",
    "text": "YarnApp represents one instance of application running on the yarn cluster\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.YarnAppAttemptStatus",
    "page": "Docstrings",
    "title": "Elly.YarnAppAttemptStatus",
    "category": "type",
    "text": "YarnAppAttemptStatus wraps the protobuf type for ease of use\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.YarnAppMaster",
    "page": "Docstrings",
    "title": "Elly.YarnAppMaster",
    "category": "type",
    "text": "YarnAppMaster is a skeleton application master. It provides the generic scafolding methods which can be used to create specific application masters for different purposes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.YarnAppStatus",
    "page": "Docstrings",
    "title": "Elly.YarnAppStatus",
    "category": "type",
    "text": "YarnAppStatus wraps the protobuf type for ease of use\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.YarnClient",
    "page": "Docstrings",
    "title": "Elly.YarnClient",
    "category": "type",
    "text": "YarnClient holds a connection to the Yarn Resource Manager and provides APIs for application clients to interact with Yarn.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.YarnClientProtocol",
    "page": "Docstrings",
    "title": "Elly.YarnClientProtocol",
    "category": "type",
    "text": "YarnClientProtocol: Hadoop RPC client for application client to Yarn resource manager protocol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.YarnContainers",
    "page": "Docstrings",
    "title": "Elly.YarnContainers",
    "category": "type",
    "text": "YarnContainers holds all containers related to the application. It also holds the allocation and release pipelines that are used by application master for requesting actions from resource manager. Also schedules callbacks as tasks when containers are allocated or terminated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.YarnException",
    "page": "Docstrings",
    "title": "Elly.YarnException",
    "category": "type",
    "text": "YarnException\n\nThrown by Yarn APIs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.YarnNode",
    "page": "Docstrings",
    "title": "Elly.YarnNode",
    "category": "type",
    "text": "YarnNode represents a node manager in the yarn cluster and its communication address, resource state and run state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.YarnNodes",
    "page": "Docstrings",
    "title": "Elly.YarnNodes",
    "category": "type",
    "text": "YarnNodes holds node information as visible to the application master. It also caches connection to node masters. Connection are reused if they are required before a set keepalivesecs time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.hdfs_renewlease",
    "page": "Docstrings",
    "title": "Elly.hdfs_renewlease",
    "category": "function",
    "text": "Applications that write infrequently/slowly must call renewlease periodically to prevent the namenode from assuming the client from having abandoned the file or some other client from recovering the lease.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Elly.read_packet!",
    "page": "Docstrings",
    "title": "Elly.read_packet!",
    "category": "function",
    "text": "Read one packet into inbuff starting from offset. If inbuff has insufficient space, returns the minimum additional space required in inbuff to read the packet as a negative number. Otherwise, returns the number of bytes available in inbuff after reading the packet.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Elly.APPLICATION_WEB_PROXY_BASE_ENVElly.APP_CLASSPATHElly.APP_STATESElly.APP_SUBMIT_TIME_ENVElly.ATTEMPT_STATESElly.CLASSPATHElly.CONTAINER_IDElly.CONTAINER_TOKEN_FILE_ENV_NAMEElly.DEFAULT_FILE_MODEElly.DEFAULT_FOLDER_MODEElly.ELLY_CLIENTNAMEElly.EllyElly.FINAL_APP_STATESElly.HADOOP_COMMON_HOMEElly.HADOOP_CONF_DIRElly.HADOOP_HDFS_HOMEElly.HADOOP_YARN_HOMEElly.HDATA_BLOCK_CHECKSUMElly.HDATA_COPY_BLOCKElly.HDATA_READ_BLOCKElly.HDATA_READ_METADATAElly.HDATA_REPLACE_BLOCKElly.HDATA_TRANSFER_BLOCKElly.HDATA_VERSIONElly.HDATA_WRITE_BLOCKElly.HDFSBlockReaderElly.HDFSBlockWriterElly.HDFSClientElly.HDFSExceptionElly.HDFSFileElly.HDFSFileInfoElly.HDFSFileReaderElly.HDFSFileWriterElly.HDFSProtocolElly.HDFS_READER_WINDOW_LENGTHElly.HOMEElly.HRPC_AUTH_METHOD_SIMPLEElly.HRPC_AUTH_METHOD_TOKENElly.HRPC_AUTH_PROTOCOL_NONEElly.HRPC_AUTH_PROTOCOL_SASLElly.HRPC_CALL_ID_CONNCTXElly.HRPC_CALL_ID_NORMALElly.HRPC_CALL_ID_SASLElly.HRPC_FINAL_PACKETElly.HRPC_HEADERElly.HRPC_PROTOBUFF_TYPEElly.HRPC_PROTOCOLSElly.HRPC_SERVICE_CLASSElly.HRPC_VERSIONElly.HadoopDataChannelElly.HadoopDataChannelPoolElly.HadoopRpcChannelElly.HadoopRpcControllerElly.HadoopRpcExceptionElly.HadoopRpcProtocolElly.JAVA_HOMEElly.LD_LIBRARY_PATHElly.LOCAL_DIRSElly.LOGNAMEElly.LOG_DIRSElly.LOG_DIR_EXPANSION_VARElly.LockElly.MALLOC_ARENA_MAXElly.MAX_APP_ATTEMPTS_ENVElly.NM_HOSTElly.NM_HTTP_PORTElly.NM_PORTElly.NODE_STATESElly.PATHElly.PWDElly.PipelinedPacketElly.RequestPipelineElly.SASL_DIGESTMD5_CHARSETElly.SASL_DIGESTMD5_MAXBUFElly.SASL_DIGESTMD5_METHODElly.SASL_DIGESTMD5_NCElly.SHELLElly.TDCPoolElemElly.URIElly.USERElly.UserGroupInformationElly.WriterPipelineElly.YARN_CONTAINER_CPU_DEFAULTElly.YARN_CONTAINER_LOCATION_DEFAULTElly.YARN_CONTAINER_MEM_DEFAULTElly.YARN_CONTAINER_PRIORITY_DEFAULTElly.YARN_NM_CONN_KEEPALIVE_SECSElly.YarnAMNMProtocolElly.YarnAMRMProtocolElly.YarnAppElly.YarnAppAttemptStatusElly.YarnAppMasterElly.YarnAppStatusElly.YarnClientElly.YarnClientProtocolElly.YarnContainersElly.YarnExceptionElly.YarnManagerElly.YarnNodeElly.YarnNodesElly._aElly._add_blockElly._as_dictElly._block_has_offsetElly._can_writeElly._complete_fileElly._containerElly._create_fileElly._current_windowElly._currprocnameElly._dcpoolElly._envdictElly._find_blockElly._getElly._get_block_locationsElly._get_content_summaryElly._get_file_infoElly._get_fs_statusElly._get_server_defaultsElly._len_ulebElly._new_appElly._new_or_existing_connElly._putElly._read_and_bufferElly._select_node_for_blockElly._unregisterElly._update_rmElly._walkdirElly._writeElly.abspathElly.ackrcvdElly.ackwaitElly.add_tokenElly.am_rm_tokenElly.assert_no_failureElly.atimeElly.attemptsElly.begin_sendElly.buffer_client_read_statusElly.buffer_conctx_reqhdrElly.buffer_connctxElly.buffer_handshakeElly.buffer_method_reqhdrElly.buffer_opcodeElly.buffer_readblockElly.buffer_reqhdrElly.buffer_rpc_reqhdrElly.buffer_sasl_messageElly.buffer_sasl_reqhdrElly.buffer_size_delimitedElly.buffer_writeblockElly.bytesavailableElly.calc_chksumElly.callbackElly.can_scheduleElly.can_schedule_coresElly.can_schedule_memElly.cdElly.check_write_bufferElly.closeElly.conditional_sasl_authElly.container_allocateElly.container_releaseElly.container_startElly.container_stopElly.convertElly.cpElly.digmd5_challenge_isvalidElly.digmd5_decode_challengeElly.digmd5_respondElly.dirnameElly.disconnectElly.duElly.enqueueElly.eofElly.eofpacketElly.evalElly.existsElly.filemodeElly.filesizeElly.find_tokensElly.flushElly.flush_and_waitElly.get_connectionElly.hadoopElly.haverequestsElly.hdfs_blocksElly.hdfs_capacityElly.hdfs_capacity_remainingElly.hdfs_capacity_usedElly.hdfs_default_block_sizeElly.hdfs_default_replicationElly.hdfs_renewleaseElly.hdfs_server_defaultsElly.hdfs_set_replicationElly.hdfs_statusElly.hdr_iobElly.includeElly.initiateElly.isconnectedElly.isdirElly.isfileElly.islinkElly.isvalid_chksumElly.joinpathElly.killElly.launchElly.launchcontextElly.makelockElly.manageElly.md5Elly.mkdirElly.mkpathElly.moveElly.mtimeElly.mvElly.next_call_idElly.nodecountElly.nodesElly.openElly.pendingElly.populate_checksumsElly.positionElly.prepare_packetElly.process_am_rmElly.process_pipelineElly.pwdElly.readElly.read!Elly.read_packet!Elly.read_packet_ackElly.readallElly.readbytesElly.readdirElly.recv_blockopElly.recv_packet_hdrElly.recv_rpc_messageElly.recv_sasl_messageElly.registerElly.release_connectionElly.renewleaseElly.request_allocElly.request_releaseElly.rmElly.sasl_authElly.seekElly.seekendElly.seekstartElly.send_block_readElly.send_block_writeElly.send_bufferedElly.send_read_statusElly.send_rpc_messageElly.set_busyElly.set_debugElly.set_freeElly.setup_workerElly.showElly.skipElly.statElly.statusElly.submitElly.testdigmd5Elly.token_aliasElly.torequestElly.touchElly.trigger_flushedElly.trigger_pktElly.unregisterElly.updateElly.usernameElly.verify_pkt_checksumsElly.wait_flushedElly.wait_for_attempt_stateElly.wait_for_stateElly.wait_pktElly.withlockElly.writeElly.write_packet"
},

]}
