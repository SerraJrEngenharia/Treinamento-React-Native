import React, {useState} from 'react';
import * as Style from "./style"


export default function Loader({visible}) {
  return (
    <Style.Modal transparent visible={visible}>
      <Style.ViewContainer>
        <Style.Loader size="large" animating={true} color={"green"} />
      </Style.ViewContainer>
    </Style.Modal>
  );
}

