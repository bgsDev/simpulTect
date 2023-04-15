/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable prefer-const */
import React, { useState } from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import { BiChat } from 'react-icons/bi';
import { VscBook } from 'react-icons/vsc';

import ChatInbox from './CchatInbox';
import ChatTask from './CchatTask';

function Chat() {
  const btnReset = () => ({
    on: false,
    m1: false,
    m2: false,
  });
  const [btn, setBtn] = useState(btnReset);
  const [onMenu, setOnMenu] = useState(false);
  const toggleBtn = () => {
    let { m1, m2, on } = btn;
    on = (!on);
    setBtn({ on, m1, m2 });
  };

  const toggleInbox = () => {
    let { m1, m2, on } = btn;
    m1 = (!m1);
    m2 = (m2 && false);
    checkOnMenu({ m1, m2 });
    setBtn({ on, m1, m2 });
  };

  const toggleTask = () => {
    let { m1, m2, on } = btn;
    m2 = (!m2);
    m1 = (m1 && false);
    checkOnMenu({ m1, m2 });
    setBtn({ on, m1, m2 });
  };

  const checkOnMenu = ({ m1, m2 }) => {
    setOnMenu((m1 || m2));
  };
  return (
    <div className="containerChat">
      <div className={(!btn.on ? 'dnone' : '')}>
        {
            ((btn.m1) && <ChatInbox btnClose={toggleInbox} />)
        }
        {
            ((btn.m2) && <ChatTask />)
        }
      </div>
      <div className="containerBtnChat">
        {
            (btn.on
                && (
                <>
                  <div className={`talgC cwhite size ${(btn.m2 ? ' active' : '')}`}>
                    <span className={(onMenu ? 'dnone' : '')}>Task</span>
                    <button type="button" className={`cwhite ${(btn.m2 ? 'byellow' : '')}`} onClick={() => toggleTask()}>
                      <VscBook className={`icons ${(btn.m2 ? '' : 'cyellow')}`} />
                    </button>
                  </div>
                  <div className={`talgC cwhite size ${(btn.m1 ? ' active' : '')}`}>
                    <span className={(onMenu ? 'dnone' : '')}>Inbox</span>
                    <button type="button" className={`cwhite ${(btn.m1 ? 'bpurple' : '')}`} onClick={() => toggleInbox()}>
                      <BiChat className={`icons ${(btn.m1 ? '' : 'cpurple')}`} />
                    </button>
                  </div>
                </>
                )
            )
        }
        <div className="alcSR">
          <button type="button" className={(!onMenu ? 'primary' : 'primaryDark')} onClick={() => toggleBtn()} disabled={onMenu}>
            <BsFillLightningFill className={`icons ${(!onMenu ? 'cwhite' : 'menuDark')}`} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
