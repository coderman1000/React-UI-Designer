import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const ResizableItem = ({ children }) => {
  return (
    <ResizableBox width={100} height={100} minConstraints={[50, 50]} maxConstraints={[300, 300]}>
      <div style={{ width: '100%', height: '100%' }}>{children}</div>
    </ResizableBox>
  );
};

export default ResizableItem;
