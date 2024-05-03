import React from 'react';

import {
  SocketProvider,
  RestProvider,
  ChatProvider,
  ChatPage as ChatViewport,
} from '@pmt/chat';
import { makeStyles } from '@mui/styles';
import { AppLanguageProvider } from '../../context/LanguageContext';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      height: `calc(100vh - ${theme.spacing(25)})`,
      overflow: 'hidden',
    },
  };
});

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const Chat = ({ lang, activeGroupId, activeChatUserId }) => {
  const classes = useStyles();
  const chatWsPath = '/socket.io';
  const chatWsUrl = 'wss://chat.mobimed.ru';
  const chatBaseURLApi = 'https://chat.mobimed.ru/';

  return (
    <AppLanguageProvider>
      <div className={classes.container}>
        <ChatProvider defLang={lang} tokenKey="authToken">
          <RestProvider baseURLApi={chatBaseURLApi} pageSize={25}>
            <SocketProvider wsUrl={chatWsUrl} wsPath={chatWsPath}>
              <ChatViewport
                activeGroupId={activeGroupId}
                activeChatUserId={activeChatUserId}
              />
            </SocketProvider>
          </RestProvider>
        </ChatProvider>
      </div>
    </AppLanguageProvider>
  );
};

export default Chat;
