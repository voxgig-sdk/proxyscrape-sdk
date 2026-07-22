package core

type ProxyscrapeError struct {
	IsProxyscrapeError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewProxyscrapeError(code string, msg string, ctx *Context) *ProxyscrapeError {
	return &ProxyscrapeError{
		IsProxyscrapeError: true,
		Sdk:              "Proxyscrape",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ProxyscrapeError) Error() string {
	return e.Msg
}
