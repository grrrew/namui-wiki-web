import Button from '@/components/button'
import InputLabel from '@/components/inputLabel'
import Inputbox from '@/components/inputbox'
import RadioButton from '@/components/radioButton'
import { useFunnelContext } from '@/contexts/useFunnelContext'
import FormLayout from '@/layout/form-layout'
import { QsSchemaType } from '@/pages/surveys/hooks/useQuestionsForm'

import { Controller, useFormContext, useWatch } from 'react-hook-form'

const fetchQuestionMockData = {
  data: [
    {
      id: '65d3156916f83528d804fadb',
      title: '{{userName}}님은<br/><b>사람들과 빨리 친해지는 편</b>인가요?',
      type: 'OX',
      dashboardType: 'CHARACTER',
      surveyOrder: 1,
      options: [
        {
          id: '65d3156916f83528d804fac7',
          value: '🙅‍♂️  아니요, 시간이 걸리는 편이에요',
          text: '🙅‍♂️  아니요, 시간이 걸리는 편이에요',
        },
        {
          id: '65d3156916f83528d804fac6',
          value: '🙆‍♂️ 네, 그러는 편이에요.',
          text: '🙆‍♂️ 네, 그러는 편이에요.',
        },
      ],
    },
  ],
}

const First = () => {
  const { toNextStep } = useFunnelContext()
  const { trigger, control } = useFormContext<QsSchemaType>()

  const { firstQuestion, firstReason } = useWatch({ control })

  const isDisabled = !firstQuestion || !firstReason

  return (
    <>
      <FormLayout
        title="1/2" //프로그래스바
        button={
          <Button disabled={isDisabled} onClick={toNextStep} className="w-full">
            다음
          </Button>
        }
        content={
          <>
            <div className="text-left">
              <div
                dangerouslySetInnerHTML={{
                  __html: fetchQuestionMockData.data[0].title,
                }}
              ></div>

              <div className="flex flex-col mt-8 space-y-2">
                {fetchQuestionMockData.data[0].options.map((option) => (
                  <Controller
                    key={option.id}
                    name="firstQuestion"
                    control={control}
                    render={({ field }) => (
                      <RadioButton
                        {...field}
                        id={option.id}
                        value={option.value}
                        label={option.text}
                        selected={firstQuestion === option.value || false}
                        onChange={(e) => {
                          field.onChange(e.target.value)
                          trigger('firstQuestion')
                        }}
                      />
                    )}
                  />
                ))}
              </div>
              <div className="mt-60">
                <InputLabel
                  className="text-sub2-medium"
                  label="이유를 말해주세요"
                  required
                >
                  <Controller
                    control={control}
                    name="firstReason"
                    render={({ field }) => (
                      <Inputbox
                        {...field}
                        placeholder="15글자 이내로 입력해주세요"
                        maxLength={15}
                      />
                    )}
                  />
                </InputLabel>
              </div>
            </div>
          </>
        }
      />
    </>
  )
}

export default First
