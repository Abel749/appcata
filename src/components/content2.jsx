import React from 'react';
import {
	Card,
	Col,
	Row
} from 'antd';
import Image from "next/image";
import Link from "next/link";
import {
	useState
} from 'react';

const Content2 = () => {
		const [isHovering, setIsHovering] = useState(false);
		const [isHovering2, setIsHovering2] = useState(false);
		const [isHovering3, setIsHovering3] = useState(false);
		const [isHovering4, setIsHovering4] = useState(false);

		const handleMouseOver = () => { setIsHovering(true); };
		const handleMouseOut = () => { setIsHovering(false); };

		const handleMouseOver2 = () => { setIsHovering2(true); };
		const handleMouseOut2 = () => { setIsHovering2(false); };

		const handleMouseOver3 = () => { setIsHovering3(true); };
		const handleMouseOut3 = () => { setIsHovering3(false); };

		const handleMouseOver4 = () => { setIsHovering4(true); };
		const handleMouseOut4 = () => { setIsHovering4(false); };

  return (
      <Card>
          <h2>产品中心</h2>
          <h3>24个总行部门（覆盖率80%）和15家分行（覆盖率75%，主要使用万得终端、企查查、DM终端）已经在使用外部数据。</h3>
          <Row gutter={24}>
              <Col span={6} onMouseOver={handleMouseOver}  onMouseOut={handleMouseOut}>
                  <Image src="/u112_state0.png" alt="" width={280} height={360} priority />
                  { isHovering && (<div>
                      <p>全行外部数据共涉及64家供应商、109个数据项（5个终端），为全行各项经营管理、业务产品提供了622个数据产品支撑。全行24个总行部门和15家分行已经在使用外部数据，覆盖80%的部门和75%的分行</p>
                      <button>
                          <Link href="/extdata">了解更多</Link>
                      </button>
                  </div>) }
                  <p>外部数据</p>

              </Col>
              <Col span={6} onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}>
                  <Image src="/u119_state0.png" alt="" width={280} height={360} priority />
                  { isHovering2 && (<div>
                      <p>全行外部数据共涉及64家供应商、109个数据项（5个终端），为全行各项经营管理、业务产品提供了622个数据产品支撑。全行24个总行部门和15家分行已经在使用外部数据，覆盖80%的部门和75%的分行</p>
                      <button>
                          <Link href="/extdata">了解更多</Link>
                      </button>
                  </div>) }
                  <p>数据应用</p>
              </Col >
              <Col span={6} onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}>
                  <Image src="/u126_state0.png" alt="" width={280} height={360}  priority  />
                  { isHovering3 && (<div>
                      <p>全行外部数据共涉及64家供应商、109个数据项（5个终端），为全行各项经营管理、业务产品提供了622个数据产品支撑。全行24个总行部门和15家分行已经在使用外部数据，覆盖80%的部门和75%的分行</p>
                      <button>
                          <Link href="/extdata">了解更多</Link>
                      </button>
                  </div>) }
                  <p>数据治理</p>
              </Col>
              <Col span={6} onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut4}>
                 <Image src="/u133_state0.png" alt="" width={280} height={360}  priority  />
                  { isHovering4 && (<div>
                      <p>全行外部数据共涉及64家供应商、109个数据项（5个终端），为全行各项经营管理、业务产品提供了622个数据产品支撑。全行24个总行部门和15家分行已经在使用外部数据，覆盖80%的部门和75%的分行</p>
                      <button>
                          <Link href="/extdata">了解更多</Link>
                      </button>
                  </div>) }
                  <p>数据安全</p>
              </Col>
          </Row>
      </Card>
  )
};


export default Content2;
