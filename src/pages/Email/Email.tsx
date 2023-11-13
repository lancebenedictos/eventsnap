import { EmailEditor, EmailEditorProvider } from "easy-email-editor";
import "easy-email-editor/lib/style.css";
import {
  AdvancedType,
  BasicType,
  BlockManager,
  IBlockData,
  components,
} from "easy-email-core";
import {
  BlockMarketManager,
  BlockMaskWrapper,
  ExtensionProps,
  StandardLayout,
} from "easy-email-extensions";
import "easy-email-editor/lib/style.css";
import "easy-email-extensions/lib/style.css";
import "@arco-themes/react-easy-email-theme/css/arco.css";
import { useWindowSize } from "react-use";
const { Button } = components;

const initialValues = {
  subject: "Welcome to Easy-email",
  subTitle: "Nice to meet you!",
  content: BlockManager.getBlockByType(BasicType.PAGE)!.create({}),
};
import { merge } from "lodash";
import { IBlock } from "easy-email-core";

export type ICustomHeader = IBlockData<
  {
    "background-color": string;
    "text-color": string;
  },
  {
    buttonText: string;
  }
>;

const MyFirstBlock: IBlock = {
  name: "RSVP",
  type: "RSVP",
  create(payload) {
    const defaultData: ICustomHeader = {
      type: "RSVP",
      data: {
        value: {
          buttonText: "Got it",
        },
      },
      attributes: {
        "background-color": "#4A90E2",
        "text-color": "#ffffff",
      },
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.COLUMN],
  render({ data }: ICustomHeader) {
    const instance = <Button href={data.data.value.buttonText}>Test</Button>;
    return instance;
  },
};

BlockManager.registerBlocks({
  RSVP: MyFirstBlock,
});

BlockMarketManager.addCategories([
  {
    title: "Custom",
    blocks: [
      {
        type: "RSVP",
        title: "RSVP",
        name: "RSVP",
        description: "RSVP inv",
        component: () => (
          //   <BlockMaskWrapper type="RSVP" payload={{}}>
          <div style={{ position: "relative" }}>
            <img
              src={
                "https://assets.maocanhua.cn/5631c12e-5788-40fd-92fe-23930a5985d7-image.png"
              }
              style={{ maxWidth: "100%" }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 2,
              }}
            />
          </div>
          //   </BlockMaskWrapper>
        ),
      },
    ],
  },
]);
export default function Email() {
  const { width } = useWindowSize();

  const smallScene = width < 1400;

  const categories: ExtensionProps["categories"] = [
    {
      title: "Custom",
      blocks: [
        {
          type: "RSVP",
          title: "RSVP",
          name: "RSVP",
          description: "RSVP inv",
          component: () => (
            <BlockMaskWrapper type="rsvp" payload={{}}>
              <div>tsds</div>
            </BlockMaskWrapper>
          ),
          thumbnail:
            "https://assets.maocanhua.cn/5631c12e-5788-40fd-92fe-23930a5985d7-image.png",
        },
      ],
    },
    {
      label: "Content",
      active: true,
      displayType: "grid",
      blocks: [
        {
          type: AdvancedType.BUTTON,
        },
        {
          type: AdvancedType.TEXT,
        },
        {
          type: AdvancedType.IMAGE,
          //   payload: { attributes: { padding: "0px 0px 0px 0px" } },
        },
        {
          type: AdvancedType.BUTTON,
        },
        {
          type: AdvancedType.SOCIAL,
        },
        {
          type: AdvancedType.DIVIDER,
        },
        {
          type: AdvancedType.SPACER,
        },
        {
          type: AdvancedType.HERO,
        },
        {
          type: AdvancedType.WRAPPER,
        },
      ],
    },
    {
      label: "Layout",
      active: true,
      displayType: "column",
      blocks: [
        {
          title: "2 columns",
          payload: [
            ["50%", "50%"],
            ["33%", "67%"],
            ["67%", "33%"],
            ["25%", "75%"],
            ["75%", "25%"],
          ],
        },
        {
          title: "3 columns",
          payload: [
            ["33.33%", "33.33%", "33.33%"],
            ["25%", "25%", "50%"],
            ["50%", "25%", "25%"],
          ],
        },
        {
          title: "4 columns",
          payload: [[["25%", "25%", "25%", "25%"]]],
        },
      ],
    },
  ];

  return (
    <div>
      <EmailEditorProvider
        dashed={false}
        data={initialValues}
        height={"calc(100vh - 85px)"}
        // onUploadImage={services.common.uploadByQiniu}
        autoComplete
        // fontList={fontList}
        // onSubmit={onSubmit}
      >
        {({ values }, { submit }) => {
          return (
            <>
              {/* <PageHeader
                title="Edit"
                extra={
                  <Stack alignment="center">
                    <Button onClick={() => onCopyHtml(values)}>
                      Copy Html
                    </Button>
                    <Button onClick={() => onExportMjml(values)}>
                      Export Template
                    </Button>
                    <Button onClick={onImportMjml}>import Template</Button>
                    <Button type="primary" onClick={() => submit()}>
                      Save
                    </Button>
                  </Stack>
                }
              /> */}

              <StandardLayout
                compact={!smallScene}
                categories={categories}
                showSourceCode={true}
              >
                <EmailEditor />
              </StandardLayout>
            </>
          );
        }}
      </EmailEditorProvider>
    </div>
  );
}
