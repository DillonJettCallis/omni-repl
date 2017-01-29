


import {ExecutorService} from "./executor.service";
export class Terminal {

  sessionId: string

  constructor(public label: string, executor: ExecutorService) {
    executor.createSession().subscribe(
      body => this.sessionId = body.sessionId,
      error => console.log(error)
    )
  }

  commands: CommandBox[] = [new CommandBox()]

}


export class CommandBox {

  input: string = ''

  output?: string = null



}


export interface ExecRequest {
  input: string
  sessionId: string
}

export interface ExecResponse {
  message: string
}

export interface SessionResponse {
  sessionId: string
}

