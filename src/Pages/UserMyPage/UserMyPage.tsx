import styled from 'styled-components';

import { Line } from '@/components/common/Indicator/Line';
import { Container } from '@/components/common/Layout/Core';
import { PageList } from '@/components/common/PageList';
import { Status } from '@/components/server/UserInfo/Status';
import { useOrderHistory } from '@/hooks/useOrderHistory';

import { OrderHistoryCard } from './OrderHistoryCard/OrderhistoryCard';
import { RentHistoryCard } from './RentHistoryCard/RentHistoryCard';
import { UserInfo } from './UserInfo/UserInfo';

export function UserMyPage() {
  const rentData = {
    deposit: 1,
    delivering: 0,
    delComplete: 2,
    using: 2,
    usingDelivering: 1,
    usingDelComplete: 0,
  };
  const purchaseData = {
    deposit: 1,
    delivering: 0,
    delComplete: 2,
  };

  const [purchasePage, setPurchasePage] = useState(1);
  const purchasePageEnd = 10;
  const [rentPage, setRentPage] = useState(1);
  const rentPageEnd = 9;

  const onClickCancel = () => {
    console.log('클릭이벤트');
  };

  const orderHistories = useOrderHistory();
  const orderList = orderHistories!.map(
    ({ title, price, state, orderSheetId, imageUrl }) => (
      <OrderHistoryCard
        productPrice={price}
        productName={title}
        imageURL={imageUrl}
        options={['1번 옵션', '2번 옵션']}
      />
    ),
  );
  return (
    <Container
      flexDirection="column"
      alignItems="center"
      gap={15}
      styles={{
        width: '100vw',
        padding: '0 100px',
      }}
    >
      <Container justifyContent="center" gap={20} styles={{ width: '100%' }}>
        <UserInfo />
        <Container flexDirection="column" gap={10}>
          <Status isPurchase data={purchaseData} />
          <Status isPurchase={false} data={rentData} />
        </Container>
      </Container>
      <Line height={2} color="grey2" width="100%" />
      <PageList
        end={purchasePageEnd}
        skipNumber={5}
        focus={purchasePage}
        setFocus={setPurchasePage}
      />
      <Container
        justifyContent="space-between"
        gap={10}
        styles={{ width: '100%' }}
      >
        <OrderHistoryCard
          productName="테스트"
          productPrice={10000000}
          options={['1번 옵션', '2번 옵션']}
        />
        <OrderHistoryCard
          productName="테스트"
          productPrice={10000000}
          options={['1번 옵션', '2번 옵션']}
        />
        <OrderHistoryCard
          productName="테스트"
          productPrice={10000000}
          options={['1번 옵션', '2번 옵션']}
        />
      </Container>
      <PageList
        end={rentPageEnd}
        skipNumber={5}
        focus={rentPage}
        setFocus={setRentPage}
      />
      <Container
        justifyContent="space-between"
        gap={10}
        styles={{ width: '100%' }}
      >
        <RentHistoryCard
          rentRate={50}
          deliveryRate={50}
          imgSrc="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
          productName="제품 이름"
          productPrice={100000}
          options={['1번 옵션', '2번 옵션']}
          onClickCancel={onClickCancel}
        />
        <RentHistoryCard
          rentRate={50}
          deliveryRate={50}
          imgSrc="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
          productName="제품 이름"
          productPrice={100000}
          options={['1번 옵션', '2번 옵션']}
          onClickCancel={onClickCancel}
        />
      </Container>
      <Line height={2} />
      {/* <PageList /> */}
      <Container gap={20}>{orderList}</Container>
    </Container>
  );
}
