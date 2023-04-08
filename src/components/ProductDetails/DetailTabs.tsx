import { IProduct } from "../../interfaces/IProduct";
import { TabPanel, useTabs } from "react-headless-tabs";

type propsType = {
  product: IProduct
}



export const DetailTabs =(props: propsType)=> {
  const items = [
    {
      head: "Description",
      value: props.product.description,
    },
    {
      head: "Aditional information",
      value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Hic magnam odio ipsa sed? Omnis, optio. Placeat eum maxime
              a accusantium quam sunt mollitia, illo cumque natus quas nulla
              repellendus, sequi voluptatum dignissimos magnam veritatis 
              cupiditate voluptatem obcaecati optio eligendi ipsa non asperiores 
              ullam. At atque eligendi sed, maxime reprehenderit sapiente.`,
    },
    {
      head: "Review (0)",
      value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores!"
    }
  ];

  const headStrings = items.map(item => item.head);
  const [selectedTab, setSelectedTab] = useTabs(headStrings);

  

  const changeTab = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = (e.target as HTMLElement).dataset.tab;
    if (typeof target !== "string") {
      return;
    }
    setSelectedTab(target);
  };

  const getSelectedTabDistance = () => {
    const index = headStrings.findIndex((item) => item === selectedTab);
    let distance = 0;
    for(let i = 0; i < index; i++) {
      distance += headStrings[i].length + 3;
    }
    console.log(distance);
    return distance
  }
  
    return (
      <div className="detailTab">
        <nav
          style={{
            position: "relative",
          }}
        >
          <div className="underLine"
            style={{
              left: `${getSelectedTabDistance()}%`,
              width: `${selectedTab?.length}%`,
            }}
          />

          <div
            style={{
              display: "flex",
              width: "50%",
            }}
          >
            {items.map((item) => {
              return (
                <a
                  href="#tab"
                  key={item.head}
                  className="tab-item"
                  style={{
                    color: selectedTab === item.head ? "#000000" : "#707070",
                  }}
                  onClick={changeTab}
                  data-tab={item.head}
                >
                  {item.head}
                </a>
              );
            })}
          </div>
        <hr style={{borderWidth: '3px'}}/>
        </nav>
        <div>
          {items.map((item) => {
            return (
              <TabPanel key={item.head} hidden={selectedTab !== item.head} style={{color: '#707070'}}>
                {item.value}
              </TabPanel>
            );
          })}
        </div>
      </div>
    );
}
 
