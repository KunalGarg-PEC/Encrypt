import React, { useState } from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import api from '../services/api';

export default function UploadSheet() {
  const [data, setData] = useState<any>({});
  const [sig, setSig] = useState('');
  const [pub, setPub] = useState('');

  const submit = async () => {
    await api.post('/agentsheets', { payload: data, signature: sig, pubKey: pub });
    alert('Uploaded');
  };

  return (
    <div className="p-4">
      <JSONInput
        placeholder={data}
        onChange={e => setData(e.jsObject)}
        locale={locale}
        height="200px"
      />
      <input placeholder="Signature (base64)" onChange={e => setSig(e.target.value)} />
      <textarea placeholder="Public Key PEM" onChange={e => setPub(e.target.value)} />
      <button onClick={submit}>Upload Capability Sheet</button>
    </div>
);
}
