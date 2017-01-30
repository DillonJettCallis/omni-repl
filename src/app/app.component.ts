import {Component, Directive, ElementRef, Renderer, OnInit} from "@angular/core";
import {Terminal, CommandBox} from "./terminal";
import {ExecutorService} from "./executor.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tabs: Terminal[]

  constructor(private executor: ExecutorService) {

    let first = new Terminal('Javascript', 'javascript', executor)

    let second = new Terminal('Coffeescript', 'coffeescript', executor)

    let third = new Terminal('Typescript', 'typescript', executor)

    let fourth = new Terminal('Clojurescript', 'clojurescript', executor)

    this.tabs = [first, second, third, fourth]

  }

  ngOnInit(): void {
    //TODO: Better error handling.

    // this.executor.createSession().subscribe(
    //   body => this.sessionId = body.sessionId,
    //   error => console.log(error)
    // )
  }

  isBlank(str: string): boolean {
    return (!str || /^\s*$/.test(str));
  }

  private pushCommand(tab: Terminal) {
    let commands = tab.commands

    if (!this.isBlank(commands[commands.length - 1].input)) {
      tab.commands.push(new CommandBox())
    }
  }

  execCommand(tab: Terminal, command: CommandBox) {
    this.pushCommand(tab)

    this.executor.execute({input: command.input, sessionId: tab.sessionId})
      .subscribe(body => command.output = body.message,
        error => command.output = `Connection error:\n ${error.toLocaleString()}`)
  }

  tabKey(box: HTMLTextAreaElement) {
    let start = box.selectionStart
    let end = box.selectionEnd
    let value = box.value

    //TODO: Indent properly
    let head = value.slice(0, start)
    let tail = value.slice(end)

    //TODO: Make tab size configurable
    box.value = head + '  ' + tail

    return false
  }

}


@Directive({
  selector: 'textarea'
})
export class TextFocus {

  constructor(private renderer: Renderer, private elementRef: ElementRef) {

  }


  ngOnInit() {
    setTimeout(() => {
      this.renderer.invokeElementMethod(
        this.elementRef.nativeElement, 'focus', [])
    })

  }
}


