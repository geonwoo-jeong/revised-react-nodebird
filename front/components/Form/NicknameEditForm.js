import styled from "styled-components";
import { Form, Input } from "antd";

const FormWrapper = styled(Form)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`;

const NicknameEditForm = () => {
  return (
    <FormWrapper>
      <Input.Search addonBefore="Nickname" enterButton="Edit" />
    </FormWrapper>
  );
};

export default NicknameEditForm;
